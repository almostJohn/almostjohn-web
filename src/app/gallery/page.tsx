export const metadata = {
	title: "Gallery",
};

export default function GalleryPage() {
	return (
		<div className="mt-10 flex flex-col">
			<h1 className="text-2xl font-bold">A Few Frames</h1>
			<div className="mt-6 flex w-full flex-col md:max-w-md">
				<div className="border-2 border-dashed border-neutral-300 bg-neutral-200 p-15">
					<div className="flex items-center justify-center text-center">
						<p className="text-sm text-neutral-500">Coming Soon</p>
					</div>
				</div>
			</div>
		</div>
	);
}
