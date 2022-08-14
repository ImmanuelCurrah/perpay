export default function SearchBar(props) {
  const { input, setInput } = props;

  return (
    <>
      <div className="w-full max-w-xs m-2">
        <div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={input}
            type="text"
            placeholder="search..."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}
