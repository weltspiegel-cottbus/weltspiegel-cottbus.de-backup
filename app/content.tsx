import { classNames } from "@/lib/utility/class-names";
import { Kameron } from "@next/font/google";

const kameron = Kameron({ weight: "400" });

type ContentProps = {
  title: string;
  children: React.ReactNode;
};

export default function Content({ title, children }: ContentProps) {
  return (
    <div className="relative">
      <h2
        className={classNames(
          kameron.className,
          "content-title",
        )}
      >
        {title}
      </h2>
      <div className="mt-4 sm:mt-0 sm:pl-12 md:pl-24">{children}</div>
    </div>
  );
}
