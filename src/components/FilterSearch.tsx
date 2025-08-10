interface FilterSearchProps {
  filter: 'all' | 'done' | 'undone';
  setFilter: (f: 'all' | 'done' | 'undone') => void;
  search: string;
  setSearch: (s: string) => void;
}

function FilterSearch({ filter, setFilter, search, setSearch }: FilterSearchProps) {
  return (
    <div className="filter-search">
      <button
        className="filter-btn"
        onClick={() => setFilter('all')}
        disabled={filter === 'all'}
      >
        Всі
      </button>
      <button
        className="filter-btn"
        onClick={() => setFilter('done')}
        disabled={filter === 'done'}
      >
        Виконані
      </button>
      <button
        className="filter-btn"
        onClick={() => setFilter('undone')}
        disabled={filter === 'undone'}
      >
        Не виконані
      </button>
      <input
        className="filter-input"
        type="text"
        placeholder="Пошук..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

export default FilterSearch;