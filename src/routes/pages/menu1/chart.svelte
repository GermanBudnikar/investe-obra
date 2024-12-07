<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>
  
<Table color="default" noborder={false}>
    <TableBody>
      <TableBodyRow>
        <TableBodyCell>Unidades Vendidas</TableBodyCell>
        <TableBodyCell>16</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Unidades em Estoque</TableBodyCell>
        <TableBodyCell>12</TableBodyCell>
      </TableBodyRow>
    </TableBody>
    <tfoot>
      <tr class="font-semibold text-gray-900 dark:text-white">
        <th scope="row" class="py-3 px-6 text-base">Total de unidades</th>
        <td class="py-3 px-6">28</td>
      </tr>
    </tfoot>
</Table>