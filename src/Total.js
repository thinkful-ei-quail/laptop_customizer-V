


export default function Total(selected)
{
    return Object.keys(selected).reduce(
        (acc, curr) => acc + selected[curr].cost,
        0
      );
}