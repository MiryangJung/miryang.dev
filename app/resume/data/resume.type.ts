type Content = {
	title: string;
	description?: string;
	do: string[];
	tech: string[];
	techHighlight: string[];
	link: string | null;
};

type Experience = {
	company: string;
	companyColor?: `#${string}`;
	position: string;
	period: string;
	content: Content[];
};

type OtherExperience = {
	name: string;
	content: { title: string; url?: string }[];
};

export type Resume = {
	name: string;
	job: string;
	contact: string;
	about: { title: string; description: string }[];
	experience: Experience[];
	otherExperience: OtherExperience[];
};
