import { Link } from "react-router";
import type { Business, PriceRange } from "../../schemas/business.schema";
import SampleBadge from "../ui/SampleBadge";

// Record<PriceRange, string> forces us to cover every price range. Add one and TypeScript complains here.
const priceLabels: Record<PriceRange, string> = {
  low: "Budget",
  medium: "Moderate",
  high: "Premium",
};

type BusinessRowProps = { business: Business };

export default function BusinessRow({ business }: BusinessRowProps) {
  const {
    slug,
    name,
    category,
    area,
    address,
    priceRange,
    ratingAverage,
    reviewCount,
    isSample,
  } = business;

  return (
    <li className="border-b border-line">
      <Link
        to={`/businesses/${slug}`}
        className="flex flex-col gap-2 py-5 hover:bg-mist sm:flex-row sm:items-start sm:justify-between sm:gap-8"
      >
        <div>
          <h2 className="text-lg font-medium text-ink">{name}</h2>
          <p className="mt-1 text-sm text-ink">
            {category.name}, {area}
          </p>
          <p className="mt-0.5 text-sm text-muted">{address}</p>
        </div>
        <div className="flex flex-col items-start gap-1 text-sm text-muted sm:items-end sm:text-right">
          <p>
            {ratingAverage === null
              ? "No reviews yet"
              : `${ratingAverage.toFixed(1)} from ${reviewCount} ${reviewCount === 1 ? "review" : "reviews"}`}
          </p>
          {priceRange !== null && <p>{priceLabels[priceRange]}</p>}
          {isSample && <SampleBadge />}
        </div>
      </Link>
    </li>
  );
}
