const FileInput = ({ className = "", ...props }) => {
  return (
    <input
      type="file"
      className={`
        text-sm rounded-sm
        file:mr-3 file:rounded-sm file:border-0
        file:px-3 file:py-2 file:font-medium file:cursor-pointer
        file:text-brand-50 file:bg-brand-600
        hover:file:bg-brand-700
        transition-colors duration-200
        ${className}
      `}
      {...props}
    />
  );
};

export default FileInput;
