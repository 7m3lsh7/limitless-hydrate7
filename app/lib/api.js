export async function fetchLogo() {
    try {
      const res = await fetch('http://localhost:1337/api/logos?populate=logoImage', {
        cache: 'no-store',
      });
      if (!res.ok) throw new Error('Failed to fetch logo');
      return res.json();
    } catch (error) {
      console.error('Fetch error:', error);
      return { data: [] };
    }
  }