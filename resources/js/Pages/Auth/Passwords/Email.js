import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import Logo from '@/Shared/Logo';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import FlashMessages from "@/Shared/FlashMessages";

export default () => {
  const { data, post, processing, setData, get } = useForm({
    email: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('reset.password'));
  }

  function handleRememberPassword(e) {
    e.preventDefault();
    get(route('login'));
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
      <Helmet title="Reset" />
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
            <h1 className="text-3xl font-bold text-center">Forgot your password?</h1>
            <div className="w-24 mx-auto mt-6 border-b-2" />
            <FlashMessages/>
            <TextInput
              className="mt-10"
              label="Email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              onChange={e => setData('email', e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200">
            <button
              className="hover:underline"
              tabIndex="-1"
              onClick={handleRememberPassword}
            >
              I remember my password.
            </button>
            <LoadingButton
              className="btn-indigo"
              loading={processing}
            >
              Reset Password
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};
