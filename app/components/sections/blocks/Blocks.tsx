import { BlockType } from "~/api/blockTypes.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/shared/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { BasicLink } from "~/components/shared/BasicLink";
import startCase from "lodash.startcase";

export interface BlockCarouselProps {
  blocks: BlockType[];
}

export function BlockCarousel({ blocks }: BlockCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({ playOnInit: true, stopOnInteraction: false, delay: 2000 }),
      ]}
      className="w-full relative z-[11]"
    >
      <CarouselContent className="ml-10 mr-8 lg:ml-40 lg:mr-40">
        {blocks.map((block) => (
          <CarouselItem
            key={block.type}
            className="basis-full md:basis-1/2 2xl:basis-1/3 4xl:basis-1/4 pl-4 lg:pl-6 min-h-[200px]"
          >
            <BasicLink to="#" className="h-full">
              <BlockCarouselItem data={block} />
            </BasicLink>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
interface BlockCarouselItemProps {
  data: BlockType;
}
export function BlockCarouselItem({ data }: BlockCarouselItemProps) {
  return (
    <article className="flex flex-col gap-2 border rounded-xl shadow-xl p-4 md:p-6 min-h-[134px] md:min-h-[170px]">
      <div className="flex gap-2 items-center">
        <div className="rounded-lg p-1.5 w-10 h-10 shrink-0 border flex justify-center items-center">
          <img
            className="w-5 h-5 shrink-0"
            src={resolveBlockTypeIconPath(`type/${data.type}`)}
            alt={data.type}
          />
        </div>
        <h4 className="text-base md:text-xl font-semibold">
          {startCase(data.type)}
        </h4>
      </div>
      <p
        className="text-muted-foreground text-sm md:text-base line-clamp-3"
        title={data.description}
      >
        {data.description}
      </p>
    </article>
  );
}

export function resolveBlockTypeIconPath(path: string) {
  return `/block-types/${path}.svg`;
}
