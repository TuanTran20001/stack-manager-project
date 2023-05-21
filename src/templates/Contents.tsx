// import { useState } from 'react';
interface ContentsProps {
  onPageChange: (pageNumber: number) => void;
  currentPage: number;
  totalPages: number;
}
const Contents: React.FC<ContentsProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="Contents">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Contents;