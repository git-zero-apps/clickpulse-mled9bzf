"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewLinkInBioPagePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const record: Record<string, unknown> = {
      user_id: user?.id,
      slug: formData.get("slug"),
      title: formData.get("title"),
      bio: formData.get("bio"),
      avatar_url: formData.get("avatar_url"),
      theme: formData.get("theme"),
      link_ids: formData.get("link_ids"),
      view_count: formData.get("view_count") ? Number(formData.get("view_count")) : null,
    };

    const { error: insertError } = await supabase.from("link_in_bio_pages").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/link-in-bio-pages");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/link-in-bio-pages" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Link In Bio Pages
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Link In Bio Page</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="slug" className="label">Slug</label>
          <input id="slug" name="slug" type="text" className="input" placeholder="Enter slug" required />
        </div>
        <div>
          <label htmlFor="title" className="label">Title</label>
          <input id="title" name="title" type="text" className="input" placeholder="Enter title" required />
        </div>
        <div>
          <label htmlFor="bio" className="label">Bio</label>
          <input id="bio" name="bio" type="text" className="input" placeholder="Enter bio" />
        </div>
        <div>
          <label htmlFor="avatar_url" className="label">Avatar Url</label>
          <input id="avatar_url" name="avatar_url" type="url" className="input" placeholder="Enter avatar url" />
        </div>
        <div>
          <label htmlFor="theme" className="label">Theme</label>
          <input id="theme" name="theme" type="text" className="input" placeholder="Enter theme" />
        </div>
        <div>
          <label htmlFor="link_ids" className="label">Link Ids</label>
          <input id="link_ids" name="link_ids" type="text" className="input" placeholder="Enter link ids" />
        </div>
        <div>
          <label htmlFor="view_count" className="label">View Count</label>
          <input id="view_count" name="view_count" type="number" className="input" placeholder="Enter view count" />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Link In Bio Page"}
          </button>
          <Link href="/dashboard/link-in-bio-pages" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
