import { useEffect } from "react";

export function useMeta({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = title;

    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "index, follow";

    if (description) {
      let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!desc) {
        desc = document.createElement("meta");
        desc.name = "description";
        document.head.appendChild(desc);
      }
      desc.content = description;
    }
  }, [title, description]);
}
