'use client';

import { NextPage } from 'next';
import { useRef, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '@/lib/form_schema';

import ReCAPTCHA from 'react-google-recaptcha';
import toast from 'react-hot-toast';

import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { LuLoader2 } from 'react-icons/lu';

interface Props {}

const ContactForm: NextPage<Props> = ({}) => {
  const [captcha, setCaptcha] = useState<string>('');
  const reCaptchaRef = useRef<ReCAPTCHA>(null);

  //extract the inferred type from schema
  type ValidationSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(schema),
  });

  // Google captcha values
  function onChange(value: any | string) {
    setCaptcha(value);
  }

  const isCaptchaVerified = captcha.length > 1000 && captcha !== '';

  // react-query mutation events
  const { mutate, isPending } = useMutation({
    mutationKey: ['mail'],
    mutationFn: async (mailData: any) => {
      return await axios.post(`/api/mail`, mailData, {
        baseURL: process.env.NEXTAUTH_URL,
      });
    },

    onSuccess() {
      toast.success('Message sent! Thanks you.😂');
    },

    onError() {
      toast.error('Mail not sent!!!😢');
    },
  });

  // Form submit handler
  const onSubmit: SubmitHandler<ValidationSchemaType> = (mailData) => {
    if (isCaptchaVerified) {
      mutate(mailData);
      // clear all data
      reCaptchaRef.current?.reset();
      setCaptcha('');
      reset();
    } else {
      toast.error('Please fill out the reCAPTCHA.😢');
    }
  };

  return (
    <div className='flex justify-center'>
      <div className='max-w-3xl w-full border-[#434865] border rounded-lg p-5 lg:p-10'>
        <h3 className='text-lg lg:text-2xl text-center text-[#d3d8e8] mb-8 md:mb-12'>
          I'm here for you, Send a quote for any questions or help.
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className='mb-4'>
            <label className='text-[#d3d8e8]' htmlFor='email'>
              Your email:
            </label>
            <input
              type='text'
              id='email'
              autoComplete='off'
              {...register('email')}
              className='form__control'
            />
            {errors.email && (
              <span className='text-pink-500 text-sm'>
                {errors.email?.message}
              </span>
            )}
          </p>

          <p className='mb-4'>
            <label className='text-[#d3d8e8]' htmlFor='message'>
              Your message:
            </label>
            <textarea
              className='form__control'
              id='message'
              autoComplete='off'
              rows={5}
              {...register('message')}
            ></textarea>
            {errors.message && (
              <span className='text-pink-500 text-sm'>
                {errors.message?.message}
              </span>
            )}
          </p>

          <ReCAPTCHA
            sitekey='6LdqVHkpAAAAANo9HHph57mZjQG62hxD4n83dWQI'
            onChange={onChange}
            ref={reCaptchaRef}
          />

          <button
            type='submit'
            className='gradient-btn flex items-center gap-1 mt-3'
          >
            {isPending && <LuLoader2 className='animate-spin' size={20} />}
            {isPending ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
