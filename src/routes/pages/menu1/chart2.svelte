<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>
  
<Table color="red" noborder={false}>
    <TableBody>
      <TableBodyRow>
        <TableBodyCell>Cidade</TableBodyCell>
        <TableBodyCell>Teresina</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Estado</TableBodyCell>
        <TableBodyCell>Piauí</TableBodyCell>
      </TableBodyRow>
    </TableBody>
</Table>