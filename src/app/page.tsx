import { Container } from "@/components/Container";
import { DesktopLayout } from "@/components/DesktopLayout";
import { Intro } from "@/components/Intro";
import { MobileLayout } from "@/components/MobileLayout";
import { MobileProfile } from "@/components/MobileProfile";
import { Profile } from "@/components/Profile";
import { TabSection } from "@/components/TabSection";

export default function HomePage() {
	return (
		<>
			<Container className="flex min-h-screen w-full flex-col items-center justify-center">
				<DesktopLayout>
					<div className="flex flex-col overflow-hidden rounded-md border border-neutral-700 bg-neutral-800 p-2">
						<div className="flex flex-col gap-2 md:flex-row md:items-stretch">
							<div className="flex w-full flex-col overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 p-4">
								<div className="flex flex-col gap-6">
									<Intro />
									<TabSection />
								</div>
							</div>
							<Profile
								name="John Gale Garcia"
								avatarUrl="https://github.com/almostJohn.png"
								pronouns="he/him"
								role="Software Engineer"
								birthdate="September 25, 2000"
								livesIn="Lives in Olongapo City"
								hometown="From Malolos, Bulacan"
							/>
						</div>
					</div>
				</DesktopLayout>
				<MobileLayout>
					<div className="flex flex-col overflow-hidden border border-neutral-700 bg-neutral-800 p-3">
						<div className="relative flex w-full flex-col overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 p-4">
							<div className="absolute top-3 right-0">
								<MobileProfile
									name="John Gale Garcia"
									avatarUrl="https://github.com/almostJohn.png"
									pronouns="he/him"
									role="Software Engineer"
									birthdate="September 25, 2000"
									livesIn="Lives in Olongapo City"
									hometown="From Malolos, Bulacan"
								/>
							</div>
							<div className="flex flex-col gap-6">
								<Intro />
								<TabSection />
							</div>
						</div>
					</div>
				</MobileLayout>
			</Container>
		</>
	);
}
