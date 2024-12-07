<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>
  
<Table color="yellow">
    <TableHead>
      <TableHeadCell>Código</TableHeadCell>
      <TableHeadCell>Descrição</TableHeadCell>
      <TableHeadCell>Receita realizada (R$)</TableHeadCell>
      <TableHeadCell>%</TableHeadCell>
      <TableHeadCell>Receita a relizar (R$)</TableHeadCell>
      <TableHeadCell>%</TableHeadCell>
      <TableHeadCell>Receita total (R$)</TableHeadCell>
      <TableHeadCell>%</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>01</TableBodyCell>
  <TableBodyCell>ENTRADAS</TableBodyCell>
  <TableBodyCell>1,631,153</TableBodyCell>
  <TableBodyCell>100%</TableBodyCell>
  <TableBodyCell>5,853,266</TableBodyCell>
  <TableBodyCell>100%</TableBodyCell>
  <TableBodyCell>7,484,420</TableBodyCell>
  <TableBodyCell>100%</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>01.001.001</TableBodyCell>
  <TableBodyCell>RECEITA DE CLIENTE</TableBodyCell>
  <TableBodyCell>1,231,153</TableBodyCell>
  <TableBodyCell>75%</TableBodyCell>
  <TableBodyCell>6,253,266</TableBodyCell>
  <TableBodyCell>107%</TableBodyCell>
  <TableBodyCell>7,484,420</TableBodyCell>
  <TableBodyCell>100%</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>01.001.002</TableBodyCell>
  <TableBodyCell>INVESTEOBRA</TableBodyCell>
  <TableBodyCell>400,000</TableBodyCell>
  <TableBodyCell>25%</TableBodyCell>
  <TableBodyCell>-400,000</TableBodyCell>
  <TableBodyCell>-7%</TableBodyCell>
  <TableBodyCell>0</TableBodyCell>
  <TableBodyCell>0%</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>02</TableBodyCell>
  <TableBodyCell>RECEITAS</TableBodyCell>
  <TableBodyCell>1,631,153</TableBodyCell>
  <TableBodyCell>100%</TableBodyCell>
  <TableBodyCell>5,853,266</TableBodyCell>
  <TableBodyCell>100%</TableBodyCell>
  <TableBodyCell>7,484,420</TableBodyCell>
  <TableBodyCell>100%</TableBodyCell>
      </TableBodyRow>
    </TableBody>
</Table>