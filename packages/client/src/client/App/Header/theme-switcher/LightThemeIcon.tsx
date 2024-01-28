import { SVGAttributes } from "react"
import styled from "styled-components"

interface LightThemeIconProps extends SVGAttributes<Element> {
  fill?: string
  height?: number
  width?: number
}

const LightThemeIcon = ({
  fill = "#FF8D00",
  height = 24,
  width = 24,
}: LightThemeIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M7 11.304c.304 0 .522.261.522.566v1.565c0 .304-.218.565-.522.565-.304 0-.522-.26-.522-.565V11.87c0-.305.218-.566.522-.566zm-3.826-1.26c.217-.174.522-.218.739 0 .217.217.217.565 0 .739l-1.13 1.13c-.087.13-.218.174-.348.174-.174 0-.305-.044-.392-.174-.217-.174-.217-.522 0-.696zm6.87-.044c.173-.174.521-.174.695.043l1.238 1.238c.15.185.13.477-.064.632-.217.217-.522.217-.74 0L10 10.739c-.174-.217-.174-.522.043-.739zM7 4.174c1.522 0 2.783 1.26 2.783 2.783 0 1.565-1.261 2.782-2.783 2.826-1.565 0-2.783-1.261-2.783-2.826 0-1.522 1.261-2.783 2.783-2.783zm0 1.13c-.913 0-1.696.74-1.696 1.653 0 .956.74 1.695 1.653 1.695.956 0 1.695-.739 1.695-1.695 0-.914-.739-1.653-1.652-1.653zm6.435 1.174c.304 0 .565.218.565.522 0 .304-.26.522-.565.522H11.87c-.305 0-.566-.218-.566-.522 0-.304.261-.522.566-.522zm-11.305 0c.305 0 .522.218.522.522 0 .304-.217.522-.522.522H.522C.217 7.522 0 7.304 0 7c0-.304.217-.522.522-.522zm9.151-4.455c.185-.15.477-.13.632.064.26.174.217.522 0 .74l-1.13 1.13c-.174.173-.479.173-.696 0-.217-.218-.217-.566 0-.74zm-9.238.064c.218-.217.522-.217.74 0l1.13 1.13c.174.218.174.479 0 .696-.217.217-.522.217-.74.044l-1.13-1.13c-.217-.218-.217-.566 0-.74zM7 0c.304 0 .522.217.522.522V2.13c0 .305-.218.522-.522.522-.304 0-.522-.217-.522-.478V.522C6.478.217 6.696 0 7 0z"
      />
    </svg>
  )
}

export default styled(LightThemeIcon)`
  [fill] {
    fill: ${(props) => props.theme.core.textColor};
  }
`
