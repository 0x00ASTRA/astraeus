"use client";
import React, { useEffect } from 'react';
import { Web5 } from '@tbd54566975/web5';

  async function copyDID() {
    const { web5, did: myDid } = await Web5.connect()
    console.log("Copying DID...")
        await navigator.clipboard.writeText(myDid);
        console.log("DID Copied.")
  }

function Web5Chat() {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg">
      <h1 className="text-3xl mb-4">Web5 Chat</h1>
      <button onClick={copyDID} id="copy-did" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        Copy your DID
      </button>
      <form id="message-form" className="space-y-4">
        <input type="text" id="did" placeholder="Enter DID" className="w-full p-2 rounded bg-gray-800" />
        <input type="text" id="note" placeholder="Enter note (optional)" className="w-full p-2 rounded bg-gray-800" />
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Send
        </button>
      </form>
      <div id="messages" className="mt-4">
        {/* Messages will be displayed here */}
      </div>
    </div>
  );
};

export default Web5Chat;
