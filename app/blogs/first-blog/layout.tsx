import Liker from "@/components/liker";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <section className="max-w-3xl my-8 mx-auto">
      <div className="mx-auto py-6 px-6 bg-trans-cyan rounded-lg relative">
        <div className="max-w-[40rem] mx-auto">
          {children}
        </div>
        <span className="absolute -right-4 -top-4">
          <Liker/>
        </span>
      </div>
    </section>
  );
}