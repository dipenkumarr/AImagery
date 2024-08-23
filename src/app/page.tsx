import {
	Search,
	Upload,
	Zap,
	DollarSign,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { Syne } from "next/font/google";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"] });

export default function LandingPage() {
	return (
		<div
			className={`flex flex-col min-h-screen bg-black text-white ${syne.className}`}
		>
			<header className="px-4 lg:px-6 py-8 h-14 flex items-center backdrop-blur-md bg-black/30 sticky top-0 z-50 border-b border-green-500/20">
				<a className="flex items-center justify-center" href="/">
					<Zap className="h-6 w-6 text-green-500" />
					<span className="ml-2 text-2xl font-bold text-green-500">
						AImagery
					</span>
				</a>
				<nav className="ml-auto mr-6 flex gap-4 sm:gap-6 text-lg">
					<Link
						href={"/sign-up"}
						className="hover:underline hover:underline-offset-8 hover:text-green-400 transition-all duration-200"
					>
						Sign Up
					</Link>
					<Link
						href={"/sign-in"}
						className="hover:underline hover:underline-offset-8 hover:text-green-400 transition-all duration-200"
					>
						Sign In
					</Link>
				</nav>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
					<div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
						<div className="flex flex-col items-start space-y-4 text-left lg:w-1/2">
							<h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
								Transform Your Media with{" "}
								<span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
									AI Magic
								</span>
							</h1>
							<p className="max-w-[600px] text-gray-400 md:text-xl">
								Discover, share, and reimagine visual content in
								ways you never thought possible. Welcome to the
								future of digital creativity.
							</p>
						</div>
						<div className="lg:w-1/2">
							<img
								src="/placeholder.svg?height=400&width=400"
								alt="AI-powered media transformation"
								className="w-full h-auto rounded-lg shadow-lg shadow-green-500/20 animate-float"
							/>
						</div>
					</div>
				</section>
				<section
					id="features"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"
				>
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-green-500">
							Unleash Your Creativity
						</h2>
						<div className="grid gap-8 items-center md:grid-cols-2 lg:grid-cols-3">
							<div className="card bg-black border border-green-500/20 transform transition duration-500 hover:scale-105 hover:border-green-500/50">
								<div className="flex flex-col items-center space-y-2 p-6">
									<Upload className="h-12 w-12 mb-2 text-green-500" />
									<h3 className="text-xl font-bold text-green-400">
										Share Your Vision
									</h3>
									<p className="text-base text-gray-400 text-center">
										Upload your creations and inspire
										others. Your masterpiece could be
										someone else's muse.
									</p>
								</div>
							</div>
							<div className="card bg-black border border-green-500/20 transform transition duration-500 hover:scale-105 hover:border-green-500/50">
								<div className="flex flex-col items-center space-y-2 p-6">
									<Search className="h-12 w-12 mb-2 text-green-500" />
									<h3 className="text-xl font-bold text-green-400">
										AI-Powered Transformation
									</h3>
									<p className="text-base text-gray-400 text-center">
										Transform exactly what you need with our
										intelligent AI.
									</p>
								</div>
							</div>
							<div className="card bg-black border border-green-500/20 transform transition duration-500 hover:scale-105 hover:border-green-500/50">
								<div className="flex flex-col items-center space-y-2 p-6">
									<DollarSign className="h-12 w-12 mb-2 text-green-500" />
									<h3 className="text-xl font-bold text-green-400">
										Monetize Your Magic
									</h3>
									<p className="text-base text-gray-400 text-center">
										Turn your passion into profit. Set your
										price and let your creativity pay off.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-green-500">
							See the Magic Happen
						</h2>
						<div className="flex flex-col md:flex-row items-center justify-center gap-8">
							<div className="w-full md:w-1/2 space-y-4">
								<img
									src="/placeholder.svg?height=300&width=400"
									alt="Original image"
									className="w-full h-auto rounded-lg shadow-lg shadow-green-500/20"
								/>
								<p className="text-center text-gray-400">
									Original Image
								</p>
							</div>
							<Zap className="h-12 w-12 text-green-500 animate-pulse" />
							<div className="w-full md:w-1/2 space-y-4">
								<img
									src="/placeholder.svg?height=300&width=400"
									alt="AI-transformed image"
									className="w-full h-auto rounded-lg shadow-lg shadow-green-500/20"
								/>
								<p className="text-center text-gray-400">
									AI-Transformed Image
								</p>
							</div>
						</div>
					</div>
				</section>

				<section
					id="faq"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"
				>
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-green-500">
							Frequently Asked Questions
						</h2>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							<div className="card bg-black border border-green-500/20">
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2 text-green-400">
										How does the AI transformation work?
									</h3>
									<p className="text-gray-400">
										Our advanced AI algorithms analyze your
										media and apply creative transformations
										based on your preferences and trending
										styles.
									</p>
								</div>
							</div>
							<div className="card bg-black border border-green-500/20">
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2 text-green-400">
										Can I use the transformed content
										commercially?
									</h3>
									<p className="text-gray-400">
										Yes! Once you purchase or create
										content, you have full commercial rights
										to use it in your projects.
									</p>
								</div>
							</div>
							<div className="card bg-black border border-green-500/20">
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2 text-green-400">
										How do I start selling my content?
									</h3>
									<p className="text-gray-400">
										Simply sign up for a creator account,
										upload your content, set your prices,
										and start earning! Our platform handles
										all the transactions.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
					<div className="container mx-auto px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-500">
								Ready to Transform Your Creativity?
							</h2>
							<p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Join our community of innovators and start
								creating magic today.
							</p>
							<Link href={"/sign-up"}>
								<button className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-4 rounded-lg">
									Get Started Now
								</button>
							</Link>
						</div>
					</div>
				</section>
			</main>

			<footer className="flex justify-center items-center text-gray-300 px-4 py-4 md:px-6 border-t border-green-500/20">
				© 2023 AImagery. All rights reserved.
			</footer>
		</div>
	);
}
