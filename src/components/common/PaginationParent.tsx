"use client";
import { useRouter } from "next/navigation";
import PaginationComponent from "~/components/common/PaginationComponent";

export function PaginationParent({
  totalPages,
  currentPage,
  redirectURL,
}: {
  totalPages: number;
  currentPage: number;
  redirectURL: string;
}) {
  const router = useRouter();
  const onChangePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    router.push(`${redirectURL}&page=${page}`);
  };
  return (
    <div>
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onChangePage}
      />
    </div>
  );
}
export default PaginationParent;
