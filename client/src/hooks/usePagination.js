import { useMemo } from "react";

export const DOTS = "...";

const range = (start, end) => {
  let length = end - start + 1; // +1 to include end
  return Array.from({ length }, (_, i) => start + i); // array of numbers from start to end (inclusive) (start, start+1, start+2, ..., end)
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount * 2 + 3; // total page numbers to show (including current page and 2 siblings)

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount); // all pages are shown
    }

    const startPage = Math.max(currentPage - siblingCount, 1); // start page is max of current page - siblingCount or 1

    const endPage = Math.min(currentPage + siblingCount, totalPageCount); // end page is min of current page + siblingCount or totalPageCount

    const showLeftDots = startPage > 2;
    const showRightDots = endPage < totalPageCount - 2;

    const firstPage = showLeftDots ? DOTS : 1;
    const lastPage = showRightDots ? DOTS : totalPageCount;

    if (!showLeftDots && showRightDots) {
      let pageNumbers = 3 + 2 * siblingCount;
      let pageNumbersArray = range(
        totalPageCount - pageNumbers + 1,
        totalPageCount
      );
      return [firstPage, DOTS, ...pageNumbersArray];
    }

    if (showLeftDots && !showRightDots) {
      let middlePage = range(startPage, endPage);
      return [firstPage, DOTS, ...middlePage, DOTS, lastPage];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
