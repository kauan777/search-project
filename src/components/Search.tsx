import { useSearch } from "../contexts/ContextSearch";

export function Search() {

    const {textInput, setTextInput } = useSearch();

    return (
        <div className="flex items-center justify-beetwen w-100 bg-gray-100 rounded-3xl m-4 shadow-md">
            <div className=" px-8 py-4 flex-1">
                <input 
                    value={textInput} 
                    onChange={(e) => setTextInput(e.target.value)}
                    className="bg-transparent w-full outline-none"
                    placeholder="Procurar clientes..." 
                     />
            </div>
            <button className="h-full px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#cbd5e1" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
            </button>
        </div>

    );
}