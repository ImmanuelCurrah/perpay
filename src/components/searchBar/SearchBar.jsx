export default function SearchBar(props) {
  const { input, setInput } = props;

  return (
    <div className="text-center">
      <input
        className="w-9/12 m-2"
        type="text"
        placeholder="search..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
}
