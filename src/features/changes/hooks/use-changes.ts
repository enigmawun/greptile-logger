import { useState, useEffect } from 'react';
import type { Changelog, Change } from '../data/schema';
import mockChanges from '@/assets/changelog_master.json';
import mockChanges2 from '@/assets/changelog_cli.json';

// Transform the mock data into the expected Changelog format
const transformMockData = (): Changelog[] => {
  // Transform each change to match our schema

  const combinedChanges = [JSON.parse(JSON.stringify(mockChanges))];
  combinedChanges.push(JSON.parse(JSON.stringify(mockChanges2)));
  console.log(combinedChanges);
  return combinedChanges;
};

export function useChanges() {
  const [data, setData] = useState<Changelog[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchChanges = async () => {
      try {
        setIsLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        setData(transformMockData());
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchChanges();
  }, []);

  return { data, isLoading, error };
}

export function useChange(title: string) {
  const { data, isLoading, error } = useChanges();
  return data?.map((changelog) =>
    changelog.changelog.find((change: Change) => change.title === title)
  );
}
