

type DescItem = {
  text: string;
};

type Props = {
  subtitle?: string;
  title?: string;
  description?: DescItem[];
  descriptionstirng?: string;
  align?: "left" | "center" | "right";
  titleMaxWidth?: string;
  descriptionMaxWidth?: string;
  className?: string;
  subtitleSize?: string;
  titleSize?: string;
  descriptionSize?: string;
  showAccent?: boolean;
};

export default function SectionHeader({
  subtitle,
  title,
  description,
  align = "center",
  titleMaxWidth = "",
  descriptionMaxWidth = "",
  className = "",
  subtitleSize = "text--20",
  titleSize = "text--35",
  descriptionSize = "text--18 text-text-dark-gray",
  showAccent = true,
  descriptionstirng
}: Props) {
  const alignmentClasses =
    align === "center"
      ? "text-center"
      : align === "right"
        ? "lg:text-right text-center"
        : "lg:text-left text-center";

  const subtitleJustify =
    align === "center"
      ? "justify-center"
      : align === "right"
        ? "lg:justify-end justify-center"
        : "lg:justify-start justify-center";

  const descriptionAlignment = align === "center" ? "mx-auto" : "";

  const descriptions = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];

  return (
    <div className={`${alignmentClasses} ${className}`}>
      {subtitle && (
        <div
          className={`flex items-center gap--5 pb--20 mob-pb--0 w-full ${subtitleJustify}`}
        >
          {showAccent && (
            <span
              className="bg-blue flex-shrink-0 title-div"
              style={{ width: "10px", height: "55px" }}
            />
          )}
          <span
            className={`${subtitleSize} text-dark-gray tracking-wider uppercase font-semibold`}
          >
            {subtitle}
          </span>
        </div>
      )}

      <h2
        className={`${titleSize} text-deep-blue leading-normal font-light span-bold ${titleMaxWidth}`}
        dangerouslySetInnerHTML={{ __html: title || "" }}
      />

      {descriptions.length > 0 && (
        <div
          className={`pt--40 space-y-6 ${descriptionMaxWidth} ${descriptionAlignment}`}
        >
          {descriptions.map((desc, index) => (
            <p
              key={index}
              className={`${descriptionSize} text-dark-gray tracking-wide`}
            >
              {desc.text}
            </p>
          ))}
        </div>
      )}
      {descriptionstirng &&
       <div
          className={`pt--40 space-y-6 ${descriptionMaxWidth} ${descriptionAlignment}`}
        >
          <p
              className={`${descriptionSize} text-dark-gray tracking-wide`}
            >
              {descriptionstirng}
            </p>
        </div>
        }
    </div>
  );
}
