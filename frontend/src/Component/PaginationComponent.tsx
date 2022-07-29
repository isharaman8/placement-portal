import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface props {
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totlePage: number;
}

export default function PaginationComponent({
  page,
  handleChange,
  totlePage,
}: props) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(totlePage)}
        page={page}
        color="primary"
        onChange={handleChange}
        className="rounded-full p-3 mx-auto mt-10 w-auto bg-white"
      />
    </Stack>
  );
}
