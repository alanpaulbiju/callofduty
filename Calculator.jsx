import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaCalculator } from 'react-icons/fa';

function Calculator() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [monthlyPaymentAED, setMonthlyPaymentAED] = useState(null);
  const [monthlyPaymentUSD, setMonthlyPaymentUSD] = useState(null);
  const [details, setDetails] = useState(null);
  const [currency, setCurrency] = useState('AED');
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/AED');
      const data = await response.json();
      setExchangeRate(data.rates.USD);
    } catch (error) {
      console.error('Failed to fetch exchange rate:', error);
    }
  };

  const calculateMortgage = ({ loanAmount, downPayment, interestRate, loanTerm, termType }) => {
    const principal = parseFloat(loanAmount) - parseFloat(downPayment);
    const annualInterestRate = parseFloat(interestRate) / 100;
    const termInMonths = termType === 'years' ? parseInt(loanTerm) * 12 : parseInt(loanTerm);
    const monthlyInterestRate = annualInterestRate / 12;

    const monthlyPaymentAED = 
      (principal * monthlyInterestRate) / 
      (1 - Math.pow(1 + monthlyInterestRate, -termInMonths));

    setMonthlyPaymentAED(monthlyPaymentAED.toFixed(2));
    setDetails({ loanAmount, downPayment, interestRate, loanTerm, termType });
    
    // Convert to USD if exchange rate is available
    if (exchangeRate) {
      const monthlyPaymentUSD = monthlyPaymentAED / exchangeRate;
      setMonthlyPaymentUSD(monthlyPaymentUSD.toFixed(2));
    }
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const formatCurrency = (amount) => {
    return currency === 'AED' ? `AED ${amount}` : `USD ${amount}`;
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='mt-16 bg-[url("https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-full h-auto bg-cover p-10 flex flex-col items-center justify-center font-["Montserrat"] rounded-tl-3xl rounded-tr-3xl'>
      <div className='bg-[#d1d1d170] p-10 rounded-lg shadow-lg w-full max-w-[56rem] mt-10'>
        <div className='mb-5 text-center'>
          <h1 className='text-3xl font-bold text-gray-50 flex items-center justify-center gap-2 uppercase'>
            <FaCalculator className='text-gray-50' />
            Mortgage Calculator
          </h1>
        </div>
        <form onSubmit={handleSubmit(calculateMortgage)} className='space-y-4'>
          <div>
            <label className='block text-gray-50 font-semibold mb-2'>Loan Amount:</label>
            <input 
              type='number' 
              className={`w-full p-3 border rounded bg-[#f0f8ffb0] ${errors.loanAmount ? 'border-red-500' : 'border-gray-300'}`} 
              {...register('loanAmount', { required: true })} 
            />
            {errors.loanAmount && <p className='text-red-500 text-sm mt-1'>Loan amount is required</p>}
          </div>
          <div>
            <label className='block text-gray-50 font-semibold mb-2'>Down Payment:</label>
            <input 
              type='number' 
              className={`w-full p-3 border rounded bg-[#f0f8ffb0] ${errors.downPayment ? 'border-red-500' : 'border-gray-300'}`} 
              {...register('downPayment', { required: true })} 
            />
            {errors.downPayment && <p className='text-red-500 text-sm mt-1'>Down payment is required</p>}
          </div>
          <div>
            <label className='block text-gray-50 font-semibold mb-2'>Interest Rate (%):</label>
            <input 
              type='number' 
              step='0.01' 
              className={`w-full p-3 border rounded bg-[#f0f8ffb0] ${errors.interestRate ? 'border-red-500' : 'border-gray-300'}`} 
              {...register('interestRate', { required: true })} 
            />
            {errors.interestRate && <p className='text-red-500 text-sm mt-1'>Interest rate is required</p>}
          </div>
          <div>
            <label className='block text-gray-50 font-semibold mb-2'>Loan Term:</label>
            <input 
              type='number' 
              className={`w-full p-3 border rounded bg-[#f0f8ffb0] ${errors.loanTerm ? 'border-red-500' : 'border-gray-300'}`} 
              {...register('loanTerm', { required: true })} 
            />
            {errors.loanTerm && <p className='text-red-500 text-sm mt-1'>Loan term is required</p>}
          </div>
          <div>
            <label className='block text-gray-50 font-semibold mb-2'>Term Type:</label>
            <select 
              className={`w-full p-3 border rounded bg-[#f0f8ffb0] ${errors.termType ? 'border-red-500' : 'border-gray-300'}`} 
              {...register('termType', { required: true })}
            >
              <option value="years">Years</option>
              <option value="months">Months</option>
            </select>
            {errors.termType && <p className='text-red-500 text-sm mt-1'>Term type is required</p>}
          </div>
          <div>
            <label className='block text-gray-50 font-semibold mb-2'>Currency:</label>
            <select 
              className={`w-full p-3 border rounded bg-[#f0f8ffb0] ${errors.currency ? 'border-red-500' : 'border-gray-300'}`} 
              value={currency}
              onChange={handleCurrencyChange}
            >
              <option value="AED">AED</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <button type='submit' className='w-full bg-black text-white p-3 rounded hover:bg-gray-900 transition duration-300 uppercase font-medium'>Submit</button>
        </form>
        {currency === 'AED' && monthlyPaymentAED && (
          <div className='mt-10 bg-gray-100 p-5 rounded-lg shadow-md'>
            <h2 className='text-gray-700 text-2xl font-semibold mb-4 text-center'>Monthly Payment: {formatCurrency(monthlyPaymentAED)}</h2>
            <div className='text-gray-600'>
              <p><strong>Loan Amount:</strong> AED {details.loanAmount}</p>
              <p><strong>Down Payment:</strong> AED {details.downPayment}</p>
              <p><strong>Interest Rate:</strong> {details.interestRate}%</p>
              <p><strong>Loan Term:</strong> {details.loanTerm} {details.termType}</p>
            </div>
          </div>
        )}
        {currency === 'USD' && monthlyPaymentUSD && (
          <div className='mt-10 bg-gray-100 p-5 rounded-lg shadow-md'>
            <h2 className='text-gray-700 text-2xl font-semibold mb-4 text-center'>Monthly Payment: {formatCurrency(monthlyPaymentUSD)}</h2>
            <div className='text-gray-600'>
              <p><strong>Loan Amount:</strong> AED {details.loanAmount} (USD {formatCurrency(details.loanAmount / exchangeRate)})</p>
              <p><strong>Down Payment:</strong> AED {details.downPayment} (USD {formatCurrency(details.downPayment / exchangeRate)})</p>
              <p><strong>Interest Rate:</strong> {details.interestRate}%</p>
              <p><strong>Loan Term:</strong> {details.loanTerm} {details.termType}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
