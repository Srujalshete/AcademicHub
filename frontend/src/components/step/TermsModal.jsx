import React from 'react';

const TermsModal = ({ isOpen, onClose, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex items-center justify-center">
  <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg border border-gray-300 shadow-lg">
        <div>
          <h2 className="text-xl font-bold text-gray-900 underline">Terms and Conditions</h2>
          <p className="mt-4 text-gray-900 text-left text-xs font-bold">
          1. Bringing costly items in campaign at owner's risk.<br/>
          2. Any addiction is strictly prohibited.<br/>
          3. Participating in this holy mission to witness the historical event of the path taken by Chhatrapati Shivaji Maharaj and its sanctity will be maintained by me.<br/>
          4. Any type of misbehavior or indiscipline will result in immediate expulsion from the campaign.<br/><br/>
          I am participating in the campaign on my own responsibility and with the permission of my parents.<br/>
          The Camp Organiser, Director, Guide or any other person concerned shall not be responsible for any mishap,
          accident, injury, illness during the duration of the campaign.
          5. Please contact district leader of your area before registration.
          </p>
          <div className="mt-6 flex justify-end">
            <button
              className="mr-4 px-4 py-2 bg-green-600 text-white rounded"
              onClick={() => { onAccept(); onClose(); }}
            >
              Accept
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded"
              onClick={onClose}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsModal;
