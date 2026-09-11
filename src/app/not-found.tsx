export const metadata = {
	title: "Page not found",
};

export default function NotFound() {
	return (
		<div className="mt-10 flex flex-col">
			<div className="flex flex-col gap-3 md:flex-row md:items-center">
				<h1 className="text-2xl font-bold">Page Not Found</h1>
				<span className="font-mono text-2xl text-neutral-500">
					// status code:{" "}
					<span className="bg-neutral-300 p-1 text-neutral-900">404</span>
				</span>
			</div>
			<div className="mt-6 flex w-full flex-col md:max-w-md">
				<div className="border-2 border-dashed border-neutral-300 bg-neutral-200 p-15">
					<div className="flex items-center justify-center text-center">
						<p className="text-sm text-neutral-500">
							Page not found. The page you are looking for doesn't seem to
							exist.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
