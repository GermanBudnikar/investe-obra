<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>
  
<Table color="blue" hoverable={true} noborder={false}>
    <TableBody>
      <TableBodyRow>
        <TableBodyCell>Custo Realizado</TableBodyCell>
        <TableBodyCell> R$ 975,019.17 (24%) </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Unidades em Estoque</TableBodyCell>
        <TableBodyCell> R$ 3,066,652.50 (76%) </TableBodyCell>
      </TableBodyRow>
    </TableBody>
    <tfoot>
      <tr class="font-semibold text-gray-900 dark:text-white" style="background-color: orange;">
        <th scope="row" class="py-3 px-6 text-base">Custo Orçado</th>
        <td class="py-3 px-6"> R$ 4,041,671.68 (100%) </td>
      </tr>
    </tfoot>
</Table>