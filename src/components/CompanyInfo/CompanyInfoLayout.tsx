import {
	type CompanyInfo,
	CompanyInfoCard,
} from '@/components/CompanyInfo/CompanyInfoCard'
import { cn } from '@/lib/utils'

const companyInfos: CompanyInfo[] = [
	{
		title: 'Our Mission',
		content: '1000',
	},
	{
		title: 'Our Vision',
		content:
			'To be a global leader in AI technology, empowering organizations to achieve their full potential through intelligent automation and data-driven insights.',
	},
	{
		title: 'Our Team',
		content:
			'A diverse group of passionate professionals dedicated to pushing the boundaries of AI technology and delivering exceptional value to our clients.',
	},
	{
		title: 'Our Values',
		content: '300',
	},
	{
		title: 'Our History',
		content: '1998',
	},
	{
		title: 'Our History',
		content: '1998',
	},
]
const spanPattern = [1, 2, 2, 1]
const spanIndex = companyInfos.map(
	(_, i) => spanPattern[i % spanPattern.length]
)
export function CompanyInfoLayout() {
	return (
		<div className="mx-auto w-full max-w-6xl">
			<h2 className="text-2xl font-semibold">Our Services</h2>
			<div className="max-w-6xl w-full mx-auto mt-4 mb-16 grid gap-4 md:grid-cols-3">
				{companyInfos.map((info, index) => (
					<CompanyInfoCard
						key={index}
						{...info}
						// hybrid layout for cards
						className={cn(`col-span-${spanIndex[index]}`)}
					/>
				))}
			</div>
		</div>
	)
}
