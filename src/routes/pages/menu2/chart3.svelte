<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>
  
<Table color="green" hoverable={true} noborder={false}>
    <TableBody>
      <TableBodyRow>
        <TableBodyCell>Avanço x Custo Orçado</TableBodyCell>
        <TableBodyCell> 24% </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Receita realizada x Receita Total</TableBodyCell>
        <TableBodyCell> 16% </TableBodyCell>
      </TableBodyRow>
    </TableBody>
</Table>