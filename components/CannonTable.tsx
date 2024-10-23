import { For, Match, ParentProps, Switch } from "solid-js";

class Column {
  leftBorder = false;
  rightBorder = false;
  content = "";

  hasBorder() {
    return this.leftBorder || this.rightBorder;
  }
}

function mapChar(char: string) {
  switch (char) {
    case 'x':
      return '✖';
    case 'o':
      return '⭕'
    case 'y':
      return '✔'
    case '-':
      return ' ';
  }
  throw new Error(`Invalid cannon table value: ${char}`);
}

function buildRow(data: string, type: "header" | "body") {
  if (!data)
    throw new Error("Tried to make a row with no content");

  let currentColumn: Column = new Column();
  // don't make them specify the left border of the first column
  let haveLeftBound = true;
  let inQuotes = false;
  const columns: Column[] = [];
  for (const char of data) {
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (!inQuotes && (' ' === char || '|' === char)) {
      if (haveLeftBound) {
        currentColumn.rightBorder = '|' === char;
        columns.push(currentColumn);
        const newColumn = new Column();
        // force adjacent ends of cells to have matching border settings
        newColumn.leftBorder = currentColumn.rightBorder;
        currentColumn = newColumn;
      } else {
        currentColumn.leftBorder = '|' === char;
        haveLeftBound = true;
      }
    } else {
      currentColumn.content += (inQuotes || type === "header") ? char : mapChar(char);
    }
  }
  columns.push(currentColumn);

  if (inQuotes)
    throw new Error(`Unmatched quote in column ${columns.length + 1}`);

  return (
    <tr>
      <For each={columns}>
        {column => {
          const classList = {
            'border-y': true,
            'border-sky-300': true, 
            'dark:border-sky-600': true,
            'border-s': column.leftBorder, 
            'border-e': column.rightBorder, 
          };
        
          return (
            <Switch>
              <Match when={type === "header"}>
                <th classList={classList}>{column.content.trim()}</th>
              </Match>
              <Match when={type === "body"}>
                <td classList={classList}>{column.content.trim()}</td>
              </Match>
            </Switch>
          );
        }}
      </For>
    </tr>
  )
}

function headerRow(data: string) {
  return buildRow(data, "header");
}

interface CannonRowProps {
  data: string
}

export function CannonRow(props: CannonRowProps) {
  return buildRow(props.data, "body");
}

interface CannonTableProps extends ParentProps {
  caption: string,
  head: string
}

export function CannonTable(props: CannonTableProps) {
  return (
    <table class="bg-sky-100 dark:bg-sky-800 border-2 border-sky-300 dark:border-sky-600 caption-bottom my-4 py-2 text-center w-full">
      <caption class="font-bold text-sm">{props.caption}</caption>
      <thead class="text-sky-950 dark:text-sky-100 text-lg">
        {headerRow(props.head)}
      </thead>
      <tbody class="text-sky-950 dark:text-sky-100 text-lg">
        {props.children}
      </tbody>
    </table>
  )
}