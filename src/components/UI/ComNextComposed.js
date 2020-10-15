import React from "react";
import NextLink from "next/link";

const NextComposed = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const {
    as,
    href,
    replace,
    scroll,
    passHref,
    shallow,
    prefetch,
    ...other
  } = props;

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
    >
      <a ref={ref} {...other} />
    </NextLink>
  );
});

export default NextComposed;
