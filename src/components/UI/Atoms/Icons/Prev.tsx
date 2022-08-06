const SvgPrev = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M11.858 17.41a.715.715 0 0 0 .38-.627v-4.066h8.028A.726.726 0 0 0 21 12a.726.726 0 0 0-.734-.717h-8.028V7.217a.712.712 0 0 0-.38-.627.748.748 0 0 0-.745.02l-7.77 4.783A.714.714 0 0 0 3 12c0 .247.13.475.343.607l7.77 4.783a.754.754 0 0 0 .745.02Z"
            fill={props?.fill}
        />
    </svg>
)

export default SvgPrev
