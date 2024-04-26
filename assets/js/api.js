
async function fetchProfileData() {https
    const url = '://https://raw.githubusercontent.com/DiegoSCandido/js-developer-portfolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
