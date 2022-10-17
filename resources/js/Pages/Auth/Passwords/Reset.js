import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import Logo from '@/Shared/Logo';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';

export default () => {
  const { data, setData, errors, post, processing } = useForm({
    email: '',
    password: '',
    password_confirmation: '',
    token: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('login.attempt'));
  }

  function handleGoHome(e) {
    e.preventDefault();
    post(route('login'));
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
      <Helmet title="Login" />
      <div className="w-full max-w-md">
        <Logo
          className="block w-full max-w-xs mx-auto text-white fill-current"
          height={50}
        />
        <form
          onSubmit={handleSubmit}
          className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"
        >
          <div className="px-10 py-12">
            <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>
            <div className="w-24 mx-auto mt-6 border-b-2" />
            <TextInput
              className="mt-10"
              label="Email"
              name="email"
              type="email"
              errors={errors.email}
              value={data.email}
              placeholder="Your email address"
              onChange={e => setData('email', e.target.value)}
            />
            <TextInput
              className="mt-6"
              label="Password"
              name="password"
              type="password"
              errors={errors.password}
              value={data.password}
              placeholder="Your new password"
              onChange={e => setData('password', e.target.value)}
            />
            <TextInput
              className="mt-6"
              label="Password Confirmation"
              name="password Confirmation"
              type="password"
              errors={errors.password}
              value={data.password}
              placeholder="Confirm your new password"
              onChange={e => setData('password_confirmation', e.target.value)}
            />
            <input type="hidden" name="token" value="{{ $token }}"/>
          </div>
          <div className="flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200">
            <button
              className="hover:underline"
              tabIndex="-1" href="#reset-password"
              onClick={handleGoHome}
            >
              Cancel Reset?
            </button>
            <LoadingButton
              type="submit"
              loading={processing}
              className="btn-indigo"
            >
              Confirm Reset
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};
