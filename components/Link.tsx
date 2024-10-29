import { ParentProps } from "solid-js";

interface LinkProps extends ParentProps {
  href: string,
  invisible?: boolean
  noUnderline?: boolean,
  class?: string
}

// ripped from https://github.com/vikejs/vike/blob/main/examples/base-url/components/Link.jsx#L11
function normalize(url: string) {
  return '/' + url.split('/').filter(Boolean).join('/');
}

export default function Link(props: LinkProps) {
  const href = normalize(import.meta.env.BASE_URL + props.href);
  const extraClasses = Object.fromEntries((props.class || '').split(' ').map(clazz => [clazz, true]));
  return <a href={href} classList={{ 'font-semibold': true, 'invisible': props.invisible, 'underline': !props.noUnderline, ...extraClasses }}>{props.children}</a>;
}