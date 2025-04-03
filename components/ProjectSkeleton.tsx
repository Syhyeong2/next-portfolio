function ProjectsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Title */}
      <div className="skeleton h-12 w-3/4 mb-8"></div>

      {/* Subtitle */}
      <div className="skeleton h-8 w-1/2 mb-6"></div>

      {/* Banner image */}
      <div className="skeleton h-64 w-full mb-10"></div>

      {/* Content sections */}
      <div className="space-y-8">
        {/* Section 1 */}
        <div className="space-y-4">
          <div className="skeleton h-6 w-64 mb-4"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-5/6"></div>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <div className="skeleton h-6 w-52 mb-4"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-3/4"></div>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <div className="skeleton h-6 w-40 mb-4"></div>
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="skeleton h-8 w-24"></div>
            <div className="skeleton h-8 w-32"></div>
            <div className="skeleton h-8 w-28"></div>
          </div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSkeleton;
