import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import css from "./Searchbar.module.css"
import toast from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (searchParams: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>)=> {
    evt.preventDefault();
    const searchInput = evt.currentTarget.elements.namedItem('search') as HTMLInputElement;
    const searchParams: string = searchInput.value.trim();
    onSubmit(searchParams)
    if (searchParams === "") {
      toast.error("What are we going to look for?")
      return
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.SearchForm}
      >
        <button type="reset" className={css.Button}><IoCloseOutline size="16px" /></button>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.SearchInput}
        />
        <button type="submit" aria-label="search" className={css.Button}><FiSearch size="16px" /></button>
      </form>
    </header>
  )
}

export default SearchBar

