"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function EditLinkInBioPagePage() {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [record, setRecord] = useState<Record<string, unknown> | null>(null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    async function fetchRecord() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("link_in_bio_pages")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) setError(error.message);
      else setRecord(data);
      setFetching(false);
    }
    fetchRecord();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const supabase = createClient();

    const updates: Record<string, unknown> = {
      slug: formData.get("slug"),
      title: formData.get("title"),
      bio: formData.get("bio"),
      avatar_url: formData.get("avatar_url"),
      theme: formData.get("theme"),
      link_ids: formData.get("link_ids"),
      view_count: formData.get("view_count") ? Number(formData.get("view_count")) : null,
    };

    const { error: updateError } = await supabase
      .from("link_in_bio_pages")
      .update(updates)
      .eq("id", params.id);

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/link-in-bio-pages");
      router.refresh();
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
      </div>
    );
  }

  if (!record) {
    return (
      <div className="rounded-lg bg-red-50 border border-red-200 p-4">
        <p className="text-sm text-red-700">Link In Bio Page not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/link-in-bio-pages" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Link In Bio Pages
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Edit Link In Bio Page</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="slug" className="label">Slug</label>
          <input id="slug" name="slug" type="text" className="input" defaultValue={String(record.slug ?? "")} required />
        </div>
        <div>
          <label htmlFor="title" className="label">Title</label>
          <input id="title" name="title" type="text" className="input" defaultValue={String(record.title ?? "")} required />
        </div>
        <div>
          <label htmlFor="bio" className="label">Bio</label>
          <input id="bio" name="bio" type="text" className="input" defaultValue={String(record.bio ?? "")} />
        </div>
        <div>
          <label htmlFor="avatar_url" className="label">Avatar Url</label>
          <input id="avatar_url" name="avatar_url" type="url" className="input" defaultValue={String(record.avatar_url ?? "")} />
        </div>
        <div>
          <label htmlFor="theme" className="label">Theme</label>
          <input id="theme" name="theme" type="text" className="input" defaultValue={String(record.theme ?? "")} />
        </div>
        <div>
          <label htmlFor="link_ids" className="label">Link Ids</label>
          <input id="link_ids" name="link_ids" type="text" className="input" defaultValue={String(record.link_ids ?? "")} />
        </div>
        <div>
          <label htmlFor="view_count" className="label">View Count</label>
          <input id="view_count" name="view_count" type="number" className="input" defaultValue={String(record.view_count ?? "")} />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Update Link In Bio Page"}
          </button>
          <Link href="/dashboard/link-in-bio-pages" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
