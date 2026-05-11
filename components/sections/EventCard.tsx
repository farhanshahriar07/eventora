import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: {
    slug: string;
    title: string;
    date: string;
    location: string;
    image: string;
  };
};

export default function EventCard({
  event,
}: EventCardProps) {

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block"
    >

      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          transition-all
          duration-700
          hover:-translate-y-2
          hover:border-rose-600/30
          hover:shadow-[0_0_80px_rgba(236,72,153,0.15)]
        "
      >

        {/* Glow */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-700
            group-hover:opacity-100
          "
        >
          <div
            className="
              absolute
              -left-20
              top-0
              h-60
              w-60
              rounded-full
              bg-rose-600/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-0
              right-0
              h-60
              w-60
              rounded-full
              bg-indigo-500/20
              blur-3xl
            "
          />
        </div>

        {/* Image */}
        <div className="relative h-[420px] overflow-hidden">

          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw
            "
            className="
              object-cover
              transition-transform
              duration-1000
              group-hover:scale-110
            "
          />

          {/* Dark Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/30
              to-transparent
            "
          />

          {/* Top Gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/30
              to-transparent
            "
          />

          {/* Floating Badge */}
          <div
            className="
              absolute
              left-5
              top-5
              rounded-full
              border
              border-white/10
              bg-black/30
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
              backdrop-blur-xl
            "
          >
            {event.location}
          </div>

          {/* Content */}
          <div
            className="
              absolute
              bottom-0
              left-0
              z-10
              w-full
              p-8
            "
          >

            {/* Date */}
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-rose-500
              "
            >
              {event.date}
            </p>

            {/* Title */}
            <h3
              className="
                mt-4
                text-4xl
                font-black
                uppercase
                leading-none
                tracking-tight
                text-white
              "
            >
              {event.title}
            </h3>

            {/* CTA */}
            <div
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/80
                transition-all
                duration-300
                group-hover:gap-5
                group-hover:text-white
              "
            >
              Explore Event →

            </div>

          </div>

        </div>

      </div>

    </Link>
  );
}