import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import { api } from "~/trpc/server";
import { cn } from "../lib/utils";
import Markdown from "markdown-to-jsx";

export default async function ReadmeAccordion({
  repoName,
}: {
  repoName: string;
}) {
  let disabled = false;
  let decodedReadme = "";

  const readme = await api.repos.getRepoReadme({ repo: repoName });
  if (!readme) {
    disabled = true;
  } else {
    if (readme.encoding === "base64") {
      decodedReadme = Buffer.from(readme.content, "base64").toString("utf-8");
    } else {
      decodedReadme = readme.content;
    }
  }

  return (
    <>
      <Accordion type="single" collapsible className="w-full rounded-lg">
        <AccordionItem disabled={disabled} value="repo-readme">
          <AccordionTrigger
            className={cn("bg-muted px-4", disabled && "text-muted-foreground")}
          >
            {disabled ? "No readme available" : "Readme"}
          </AccordionTrigger>
          <AccordionContent className=" prose prose-sm max-h-80 max-w-full overflow-auto p-2 dark:prose-invert md:max-h-[60dvh]">
            <Markdown>{decodedReadme}</Markdown>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
