

// Define the props for our new component
interface SortModalProps {
  isOpen: boolean;
  onClose: () => void;
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
  title: string
}

const SortModal = ({ isOpen, onClose, options, selectedOption, onOptionSelect, title }: SortModalProps) => {
  // If the modal is not open, render nothing.
  if (!isOpen) {
    return null;
  }

  return (
    
    <div className="fixed inset-0 z-50 flex items-end" aria-modal="true">
      
      {/* Dark background overlay */}
      <div 
        className="fixed inset-0 bg-black/70 transition-opacity duration-300"
        onClick={onClose} // Close modal when overlay is clicked
      ></div>
      
      {/* The slide-up modal panel */}
      <div 
        className={`
          relative w-full bg-white rounded-t-xl shadow-xl transition-transform duration-300 ease-in-out
          ${isOpen ? 'transform translate-y-0' : 'transform translate-y-full'}
        `}
      >
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-800 pb-4 border-b border-gray-200">
            {title}
          </h2>
          
          {/* List of sort options */}
          <ul className="mt-4 space-y-2">
            {options.map((option) => (
              <li key={option}>
                <button 
                  onClick={() => onOptionSelect(option)}
                  className="w-full flex items-center justify-between text-left p-3 rounded-lg hover:bg-gray-100"
                >
                  <span className={`font-medium ${selectedOption === option ? 'text-blue-700' : 'text-gray-700'}`}>
                    {option}
                  </span>
                  
                  {/* Custom radio button */}
                  <div className={`
                    w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${selectedOption === option ? 'border-blue-700' : 'border-gray-300'}
                  `}>
                    {selectedOption === option && (
                      <div className="w-2.5 h-2.5 bg-blue-700 rounded-full"></div>
                    )}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SortModal;