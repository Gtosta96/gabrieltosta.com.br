/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { useUIContext } from '../../context/UIContextProvider';

const SubscribeDialog = () => {
  const uiContext = useUIContext();

  // 1. Create a reference to the input so we can fetch/clear it's value.
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');
  const [value, setValue] = useState('');

  const subscribe = async (e: any) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({ email: value }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    if (response.ok) {
      // 4. Clear the input value and show a success message.
      setValue('');
      setMessage('Boa, deu tudo certo com sua inscrição. 🎉');
    } else {
      // 5. If there was an error, update the message in state.
      setMessage('Puts, alguma coisa deve estar errada, sua inscricão não rolou.😕');
    }
  };

  if (!uiContext.subscribe.show) {
    return null;
  }

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-10">
      <div
        className="w-screen h-screen bg-black opacity-50 fixed top-0 left-0"
        onClick={uiContext.subscribe.toggleSubscribe}
      />
      <div className="border rounded border-gray-300 p-4 bg-white w-full max-w-md z-20">
        <form onSubmit={subscribe}>
          <label htmlFor="email-input" className="block text-gray-700 text-sm font-bold mb-2">
            E-mail
            <input
              className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mt-1"
              id="email-input"
              name="email"
              placeholder="seu@email.com"
              onChange={(e) => setValue(e.target.value)}
              required
              type="email"
            />
          </label>

          <div className="text-grey text-xs mt-4">
            {message || 'Fique tranquilo, só vou te mandar e-mail quando sair algo novo por aqui!'}
          </div>
          <button
            type="submit"
            disabled={!value}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mt-4 w-full"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeDialog;
