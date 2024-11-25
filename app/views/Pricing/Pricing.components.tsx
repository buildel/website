import { ItemList } from "~/components/itemList/ItemList";
import clsx from "clsx";
import { Dot } from "lucide-react";
import { Section, SectionWrapper } from "~/components/layout/Layout.components";

export function PricingSection() {
  return (
    <SectionWrapper className="border-b">
      <Section className="flex flex-col items-center justify-center pb-20">
        <PricingList />
      </Section>
    </SectionWrapper>
  );
}

export function PricingList() {
  return (
    <ItemList
      className="gap-6 grid grid-cols-[290px] justify-center max-w-screen-xl mx-auto px-4 md:px-8"
      items={[
        {
          active: true,
          description: "Explore BuildEL's capabilities and learn the basics.",
          id: "prod_QzfVx9MrBKHCqK",
          name: "Free",
          prices: [
            {
              amount: 0,
              currency: "usd",
              id: "1234",
              recurring: {
                interval: "year",
              },
            },
            {
              amount: 0,
              currency: "usd",
              id: "123",
              recurring: {
                interval: "month",
              },
            },
          ],
          features: [
            {
              name: "Unlimited runs per month",
            },
            {
              name: "Unlimited Workflows",
            },
            {
              name: "Unlimited KBs and Datasets",
            },
            {
              name: "Unlimited Experiment",
            },
            {
              name: "Unlimited Seats",
            },
            {
              name: "Community support on Discord",
            },
          ],
          metadata: {
            recommended: true,
          },
        },
      ]}
      renderItem={(item) => <BillingPlanListItem data={item} />}
    />
  );
}

type SubscriptionPrice = {
  amount: number;
  currency: string;
  id: string;
  recurring: { interval: unknown } | null;
};

type SubscriptionFeature = {
  name: string;
};

type SubscriptionMetadata = {
  recommended: boolean;
};

type BillingPlan = {
  active: boolean;
  description: string;
  id: string;
  name: string;
  prices: SubscriptionPrice[];
  features: SubscriptionFeature[];
  metadata: SubscriptionMetadata;
};

type BillingPlanListItemProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  data: BillingPlan;
};

function BillingPlanListItem({
  data,
  className,

  ...rest
}: BillingPlanListItemProps) {
  const { recommended } = data.metadata;

  return (
    <article
      className={clsx(
        "relative rounded-lg border p-4 grow h-[500px] overflow-hidden text-neutral-950 bg-white",
        {
          "border-neutral-700": recommended,
          "border-neutral-300": !recommended,
        },
        className
      )}
      {...rest}
    >
      {recommended ? (
        <div className="absolute top-0 right-0 bg-black text-white text-sm px-3 py-1 rounded-bl-lg">
          Most popular
        </div>
      ) : null}

      <div className="h-[100px] flex justify-between gap-2">
        <h3
          className={clsx("text-base", {
            "font-semibold": recommended,
            "font-normal": !recommended,
          })}
        >
          {data.name}
        </h3>
      </div>

      <p>
        <span className="text-4xl font-bold">
          {Intl.NumberFormat("en-US", {
            currency: "USD",
            style: "currency",
            maximumFractionDigits: 0,
          }).format(data.prices[0].amount / 100)}
        </span>
        <span className="text-neutral-800 text-sm">/month</span>
      </p>

      <p className="text-sm text-neutral-800 line-clamp-2 h-10 mb-6 mt-2">
        {data.description}
      </p>

      <ItemList
        className="flex flex-col gap-2"
        items={data.features.map((item, index) => ({ ...item, id: index }))}
        renderItem={(item) => <BillingPlanItemFeature data={item} />}
      />
    </article>
  );
}

interface BillingPlanItemFeatureProps {
  data: SubscriptionFeature;
}

function BillingPlanItemFeature({ data }: BillingPlanItemFeatureProps) {
  return (
    <p className="flex gap-2 items-center text-muted-foreground text-sm">
      <Dot /> <span>{data.name}</span>
    </p>
  );
}
