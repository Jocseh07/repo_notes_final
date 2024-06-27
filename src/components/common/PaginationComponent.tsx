"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  // PaginationEllipsis,
  PaginationNext,
} from "~/components/ui/pagination";

function PaginationComponent({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  const startPage = Math.max(1, currentPage - 5);
  const endPage = Math.min(totalPages, currentPage + 4);

  return (
    <div className="flex items-center justify-center py-8">
      <Pagination>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer"
                onClick={() => onPageChange(currentPage - 1)}
              />
            </PaginationItem>
          )}
          {Array.from(
            { length: endPage - startPage + 1 },
            (_, index) => startPage + index,
          ).map((number) => (
            <PaginationItem key={number}>
              <PaginationLink
                className="cursor-pointer"
                onClick={() => onPageChange(number)}
                isActive={number === currentPage}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext
                className="cursor-pointer"
                onClick={() => onPageChange(currentPage + 1)}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
export default PaginationComponent;
