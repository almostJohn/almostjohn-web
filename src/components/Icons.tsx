import * as React from "react";

type IconProps = React.ComponentProps<"svg">;

export const Icons = {
	CurlyBrackets: (props: IconProps) => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 17c-2 0-2-1.746-2-3.5L5.5 12L7 10.5C7 8.746 7 7 9 7m6 10c2 0 2-1.746 2-3.5l1.5-1.5l-1.5-1.5C17 8.746 17 7 15 7"
				/>
			</svg>
		);
	},
	Menu: (props: IconProps) => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
				<g fill="currentColor">
					<path d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" />
				</g>
			</svg>
		);
	},
};
